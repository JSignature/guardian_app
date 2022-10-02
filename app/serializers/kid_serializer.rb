class KidSerializer < ActiveModel::Serializer
  attributes :id, :kid_first_name, :kid_last_name, :kid_nickname, :kid_age, :kid_gender, :kid_group, :kid_allergies, :kid_notes, :kid_image, :guardian_id

  belongs_to :guardian
  has_many :activities
end
