Rails.application.routes.draw do
  resources :workouts
  resources :comments
  resources :posts
  devise_for :users, controllers: {
    registrations: "users/registrations/registrations", 
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


end
