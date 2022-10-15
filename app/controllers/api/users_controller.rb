class Api::UsersController < ApplicationController
  def create
    user = User.create(user_params)
    if !user.valid?
      render json: { errors: user.errors.full_messages }, status: :unauthorized
    else
      render json: user, status: :created
    end
  end

  private

  def user_params
    params.permit(
      :user_first_name,
      :user_last_name,
      :user_email,
      :user_image,
      :user_is_admin,
      :password,
    )
  end
end
