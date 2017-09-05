Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    post '/users/sign_up', to: 'users#sign_up'
    post '/users/sign_in', to: 'users#sign_in'
  end
end
