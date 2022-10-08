class Guardian < ApplicationRecord
  validates :guardian_email, presence: true, uniqueness: true
  validates :guardian_first_name, presence: true
  validates :guardian_address_zip,
            presence: true,
            length: {
              minimum: 5,
              maximum: 20,
            }

  has_many :kids
end
