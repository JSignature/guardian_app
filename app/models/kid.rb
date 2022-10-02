class Kid < ApplicationRecord
    belongs_to :guardian
    has_many :activities
end
