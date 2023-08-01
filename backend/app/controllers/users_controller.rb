class UsersController < ApplicationController
    before_action :authenticate_user!

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.require(:user).permit(:username, ,:email, :password, :password_confirmation, :dob, :location)
    end
end
