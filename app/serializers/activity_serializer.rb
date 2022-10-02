class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id, :kid_id, :created_at 

  belongs_to :kid
end

