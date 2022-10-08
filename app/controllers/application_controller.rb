class ApplicationController < ActionController::API
  include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

def authenticate
  header = request.headers["Authorization"]
  token = header.split(" ")[1]

  if !token
      # if no token, render error
      render json: { error: "Must be logged in to do this!"}, status: :unauthorized
  else
      #else, decode the payload using our Rails signature. 
      secret_key = Rails.application.secrets.secret_key_base
      begin
          # I would like for you to attempt to do this:
          payload = JWT.decode(token, secret_key)[0]
          @user = User.find(payload["user_id"])
      rescue
          # you ran into an error - do this instead
          render json: { error: "Must be logged in to do this!"}, status: :unauthorized               
      end
  end
end

private

def invalid_record(invalid)
  render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def record_not_found(error)
    render json: {message: error.messages}, status: :record_not_found
  end

end