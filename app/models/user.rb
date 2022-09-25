class User < ApplicationRecord
    has_secure_password
    validates :user_email, presence: true, uniqueness: true
    validates :password, presence: true , length: {
        minimum: 6,
        maximum: 20
    }

end