class GuardianSerializer < ActiveModel::Serializer
  attributes :id, :is_primary, :guardian_first_name, :guardian_last_name, :guardian_address_street, :guardian_address_city, :guardian_address_state, :guardian_address_zip, :guardian_phone, :guardian_email, :guardian_image
end
