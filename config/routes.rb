Rails.application.routes.draw do
  
  
  resources :activities
  resources :kids
  resources :guardians
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :users, only: [:create]
  post "login", to: "authentication#login"
  resources :guardians
  get "/dashboard", to: "activities#userActivities"
end
