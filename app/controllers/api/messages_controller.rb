class Api::MessagesController < ApplicationController
  def create
    client = Twilio::REST::Client.new
    client.messages.create(
      {
        from: Rails.application.credentials.twilio[:phone_number],
        to: params[:phone_number],
        body: params[:message],
      },
    )

    render json: { message: 'Message Sent' }, status: :created
  end
end
