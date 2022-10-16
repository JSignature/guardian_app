class Api::MessagesController < ApplicationController
  def create
    begin
      client = Twilio::REST::Client.new
      client.messages.create(
        {
          from: Rails.application.credentials.twilio[:phone_number],
          to: params[:phone_number],
          body: params[:message],
        },
      )
      return true
    rescue Twilio::REST::RestError => error
      @error = error
      return false
    end
  end
end
