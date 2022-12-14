class Api::GuardiansController < ApplicationController
  before_action :authenticate

  def create
    guardian = Guardian.create(guardian_params)

    if !guardian.valid?
      render json: {
               errors: guardian.errors.full_messages,
             },
             status: :unauthorized
    else
      render json: guardian, status: :created
    end
  end

  def index
    guardians = Guardian.all
    render json: guardians, include: :kids, status: :ok
  end

  def show
    guardian = Guardian.find(params[:id])
    render json: guardian, status: :ok
  rescue ActiveRecord::RecordNotFound => error
    render json: { message: error.message }
  end

  def destroy
    guardian = Guardian.find(params[:id])
    guardian.destroy
    head :no_content
  rescue ActiveRecord::RecordNotFound => error
    render json: { message: error.message }
  end

  def update
    guardian = Guardian.find(params[:id])
    guardian.update(guardian_params)
    render json: guardian, status: :ok
  rescue ActiveRecord::RecordNotFound => error
    render json: { message: error.message }
  end

  private

  def guardian_params
    params.permit(
      :is_primary,
      :guardian_first_name,
      :guardian_last_name,
      :guardian_address_street,
      :guardian_address_city,
      :guardian_address_state,
      :guardian_address_zip,
      :guardian_phone,
      :guardian_email,
      :guardian_image,
    )
  end
end
