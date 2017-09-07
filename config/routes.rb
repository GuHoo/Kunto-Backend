# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    post '/users/sign_up', to: 'users#sign_up'
    post '/users/sign_in', to: 'users#sign_in'
    delete '/users/sign_out', to: 'users#sign_out'

    resources :trains, only: [:index]
    resources :menu_trains, only: %i[index create]
    resources :train_records, only: [:create]
  end

  match '*path' => 'application#render_404', via: :all
end
