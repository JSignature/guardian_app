class ActivitySerializer < ActiveModel::Serializer
  attributes :description, :user_id, :kid_id

  belongs_to :kid
end
