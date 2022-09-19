class UsersController < ApplicationController

    def create
        render json: User.create!(user_params)
    end

private 

    def user_params
        params.permit(:user_first_name, :user_last_name, :user_email, :user_image, :user_is_admin, :password)
    end

end
