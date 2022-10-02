class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id, :kid_id

  belongs_to :kid
end
