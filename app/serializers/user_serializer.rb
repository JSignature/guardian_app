class UserSerializer < ApplicationRecord
  # class Activity < ApplicationRecord
  # this one was previously working but doesnt make sense to be named this and throwing error
  has_many :activities
  has_many :kids, through: :activities
end
