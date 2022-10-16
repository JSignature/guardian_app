class Api::KidsController < ApplicationController
  before_action :authenticate

  def create
    kid = Kid.create!(kid_params)

    render json: kid, status: :created
  end

  def index
    kids = Kid.all
    render json: kids, status: :ok
  end

  def show
    kid = Kid.find(params[:id])
    render json: kid, status: :ok
  rescue ActiveRecord::RecordNotFound => error
    render json: { message: error.message }
  end

  def destroy
    kid = Kid.find(params[:id])
    kid.destroy
    head :no_content
  rescue ActiveRecord::RecordNotFound => error
    render json: { message: error.message }
  end

  def update
    kid = Kid.find(params[:id])
    kid.update(kid_params)
    render json: kid, status: :ok
  rescue ActiveRecord::RecordNotFound => error
    render json: { message: error.message }
  end

  private

  def kid_params
    params.permit(
      :kid_first_name,
      :kid_last_name,
      :kid_nickname,
      :kid_age,
      :kid_gender,
      :kid_group,
      :kid_allergies,
      :kid_notes,
      :kid_image,
      :guardian_id,
    )
  end
end
