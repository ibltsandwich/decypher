Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:create, :show, :index, :update] do
      resources :albums, only: [:show, :create, :update]
    end
    resources :albums, only: [:index]
    resources :songs, only: [:create, :index, :show, :update] do
      resources :comments, only: [:create, :destroy]
    end
    resources :annotations, only: [:create, :update, :show]do
      resources :comments, only: [:create, :destroy]
    end
    resources :upvotes, only: [:create, :update, :destroy]
  end
end
