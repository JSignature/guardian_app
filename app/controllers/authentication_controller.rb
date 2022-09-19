class AuthenticationController < ApplicationController

    def login
    user = User.find_by(user_email: params[:user_email])
    if !user
        render json: {error: "User Email Not Found"}, status:  :unauthorized
    else
        if user.authenticate(params[:password])
            render json: {message: "Correct Password"}
        else    
            render json: {error: "PW is not correct"}, status:  :unauthorized
    
   end

    end
    end
end
