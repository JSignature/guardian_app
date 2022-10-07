class Activity < ApplicationRecord
    has_many :activities
    has_many :kids, through: :activities
end