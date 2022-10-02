class ActivitiesController < ApplicationController

    def create
        activity = Activity.create(activity_params)

        if activity

            render json: activity, status: :created

        else
            render json: {error: "Error"}
        end

    end

    def index 
        activities = Activity.all
        render json: activities, include: :kids, status: :ok
        
    end

    def destroy

        activity = Activity.find(params[:id])
        activity.destroy
        head :no_content
        
            rescue ActiveRecord::RecordNotFound => error
                render json: {message: error.message}
        
        
        end

private

    def activity_params
        params.permit(:description, :user_id, :kid_id)
    end



end
