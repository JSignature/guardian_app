class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id, :kid_id, :created_at, :user

  belongs_to :kid
  belongs_to :user
end
