class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def authenticate
    header = request.headers['Authorization']
    token = header.split(' ')[1]

    if !token
      render json: {
               error:
                 'Must be logged in to do this, incorrect Token sent to Server',
             },
             status: :unauthorized
    else
      # secret_key = Rails.application.secrets.secret_key_base
      # changed to see if this will change anything
      secret_key = Rails.application.credentials.secret_key_base
      begin
        payload = JWT.decode(token, secret_key)[0]
        @user = User.find(payload['user_id'])
      rescue JWT::DecodeError
        nil
      end

      # rescue StandardError
      #   render json: {
      #            error: 'Must be logged in to do this!',
      #            secret_key: secret_key,
      #            payload: payload,
      #            user: @user,
      #          },
      #          status: :unauthorized
      end
    end
  end

  private

  def invalid_record(invalid)
    render json: {
             errors: invalid.record.errors.full_messages,
           },
           status: :unprocessable_entity
  end

  def record_not_found(error)
    render json: { message: error.messages }, status: :record_not_found
  end
end
