# frozen_string_literal: true
class Users::Registrations::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    user = User.new(user_params)
    if user.save
      sign_in(:user, user)
      render json: { user: user, message: "Account created successfully" }, status: :created
    else
      clean_up_passwords user
      set_minimum_password_length
      render json: { error: user.errors.full_messages.join(", ") }, status: :unprocessable_entity
    end
  end

  private

   def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :username, :dob, :location)
   end

end
