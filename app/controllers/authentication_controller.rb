class AuthenticationController < ApplicationController

    def login
           user = User.find_by(user_email: params[:user_email])
            if !user
                render json: {error: "User Email Not Found"}, status:  :unauthorized
            else
                if user.authenticate(params[:password])
                    secret_key = Rails.application.secrets.secret_key_base
                    token = JWT.encode({user_id: user.id, user_email: user.user_email}, secret_key)

                    render json: {token: token, user_email: user.user_email}
                else    
                    render json: {error: "PW is not correct"}, status:  :unauthorized

                        
                end
            end
    end

end
