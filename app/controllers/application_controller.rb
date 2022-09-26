class ApplicationController < ActionController::API
  include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

private

def invalid_record(invalid)
  render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def record_not_found(error)
    render json: {message: error.messages}, status: :record_not_found
  end

end