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
      secret_key = Rails.application.credentials.secret_key_base

      begin
        # payload =
        #   JWT.decode(
        #     token,
        #     'e443049bc91527d2b23332e41c9c026af4be76693cbd9283af9bcce653008dc75666db3a85614a5f540b4bc3a0271168545958d68298414164a8e70c17f142eb',
        #   )[
        #     0
        #   ]
        payload = JWT.decode(token, secret_key)[0]

        @user = User.find(payload['user_id'])
      rescue StandardError
        render json: {
                 error: 'Must be logged in to do this!',
                 secret_key: secret_key,
                 payload: payload,
                 user: @user,
               },
               status: :unauthorized
      end
      # rescue JWT::DecodeError
      #   nil
      # end
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
