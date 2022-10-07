class Kid < ApplicationRecord
    belongs_to :guardian
    has_many :activities
    has_many :users, through: :activities
end
