# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    post '/users/sign_up', to: 'users#sign_up'
    post '/users/sign_in', to: 'users#sign_in'
    delete '/users/sign_out', to: 'users#sign_out'

    resources :trains, only: [:index]
    get '/my_trains', to: 'trains#my_trains'
  end
end
