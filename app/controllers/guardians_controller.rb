class GuardiansController < ApplicationController

def create 
    guardian = Guardian.create(guardian_params)

    if guardian

    render json: guardian, status: :created

    else
        render json: {error: "Guardian is not valid"}

    end
    
end

def index 
    guardians = Guardian.all
    render json: guardians, status: :ok
    end

    def show
        guardian = Guardian.find_by_id(params[:id])

        if guardian
            render json: guardian, status: :ok

        else
            render json: {message: "This guardian does not exist"}
        end
    end


    def destroy

guardian = Guardian.find_by_id(params[:id])
guardian.destroy
head :no_content


    end
private

def guardian_params
    params.permit(:is_primary, :guardian_first_name, :guardian_last_name, :guardian_address_street, :guardian_address_city, :guardian_address_state, :guardian_address_zip, :guardian_phone, :guardian_email, :guardian_image)
end


end
