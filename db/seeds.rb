puts "🌱 Seeding app data..."

10.times do

    Guardian.create(
        is_primary: true,
        guardian_first_name: Faker::Name.first_name,
        guardian_last_name: Faker::Name.last_name,
        guardian_address_street: Faker::Address.street_address,
        guardian_address_city: Faker::Address.city,
        guardian_address_state: Faker::Address.state_abbr,
        guardian_address_zip: Faker::Address.zip,
        guardian_phone: Faker::PhoneNumber.cell_phone,
        guardian_email: Faker::Internet.safe_email,
        guardian_image: "https://i.pravatar.cc/200?img=#{rand(0..60)}"
    )
end

30.times do
    Kid.create(
        kid_first_name: Faker::Name.first_name, 
        kid_last_name: Faker::Name.last_name,
        kid_nickname: Faker::Superhero.descriptor,
        kid_age: (rand(1..6)),
        kid_gender: Faker::Gender.binary_type,
        kid_group: Faker::Music::RockBand.name,
        kid_allergies: Faker::Science.element,
        kid_notes: Faker::ChuckNorris.fact,
        kid_image: "https://robohash.org/2600:6c5e:357f:e274:dd4:#{rand(10...99)}bb:b35f:924d.png",
        guardian_id: (rand(1..10))
    )
end

puts "✅ Done seeding!"