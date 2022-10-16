class Api::MessagesController < ApplicationController
  def create
    client = Twilio::REST::Client.new
    client.messages.create(
      {
        from: Rails.application.credentials.twilio[:phone_number],
        # to: '+15409998241',
        # body: 'Hello there! This is a test; Sent from Guardian App!!',
        to: params[:phone_number],
        body: params[:message],
      },
    )

    render json: { message: 'Message Sent' }, status: :created
  end
end
