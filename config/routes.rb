Rails.application.routes.draw do
  namespace :api do
    resources :activities
    resources :kids
    resources :guardians
    resources :users, only: [:create]
    post 'login', to: 'authentication#login'
    get '/dashboard/:id', to: 'activities#userActivities'
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
