Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:create, :show, :index, :update] do
      resources :albums, only: [:show, :create]
      resources :songs, only: [:create]
    end
    resources :albums, only: [:index]
    resources :songs, only: [:index, :show, :update] do 
      resources :lyrics, only: [:show, :create, :update]
    end
  end
end
