puts '🌱 Seeding app data...'

Guardian.create(
  is_primary: true,
  guardian_first_name: 'Jerry',
  guardian_last_name: 'Seinfeld',
  guardian_address_street: Faker::Address.street_address,
  guardian_address_city: Faker::Address.city,
  guardian_address_state: Faker::Address.state_abbr,
  guardian_address_zip: Faker::Address.zip,
  guardian_phone: Faker::PhoneNumber.cell_phone,
  guardian_email: Faker::Internet.safe_email,
  guardian_image:
    'https://m.media-amazon.com/images/M/MV5BNzMzM2UxYjgtODI3Zi00M2QwLWJiODktMmY1OTI4ZDJmMTQ1XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg',
)
Guardian.create(
  is_primary: true,
  guardian_first_name: 'Elaine',
  guardian_last_name: 'Benes',
  guardian_address_street: Faker::Address.street_address,
  guardian_address_city: Faker::Address.city,
  guardian_address_state: Faker::Address.state_abbr,
  guardian_address_zip: Faker::Address.zip,
  guardian_phone: Faker::PhoneNumber.cell_phone,
  guardian_email: Faker::Internet.safe_email,
  guardian_image:
    'https://api.time.com/wp-content/uploads/2014/06/seinfeld-elaine-benes-fashion-06.jpg',
)
Guardian.create(
  is_primary: true,
  guardian_first_name: 'Geroge',
  guardian_last_name: 'Costanza',
  guardian_address_street: Faker::Address.street_address,
  guardian_address_city: Faker::Address.city,
  guardian_address_state: Faker::Address.state_abbr,
  guardian_address_zip: Faker::Address.zip,
  guardian_phone: Faker::PhoneNumber.cell_phone,
  guardian_email: Faker::Internet.safe_email,
  guardian_image:
    'https://upload.wikimedia.org/wikipedia/en/7/70/George_Costanza.jpg',
)
Guardian.create(
  is_primary: true,
  guardian_first_name: 'Cosmo',
  guardian_last_name: 'Kramer',
  guardian_address_street: Faker::Address.street_address,
  guardian_address_city: Faker::Address.city,
  guardian_address_state: Faker::Address.state_abbr,
  guardian_address_zip: Faker::Address.zip,
  guardian_phone: Faker::PhoneNumber.cell_phone,
  guardian_email: Faker::Internet.safe_email,
  guardian_image:
    'https://i.pinimg.com/736x/db/92/a7/db92a7aef30d1beeb162922a714dad06--seinfeld-cosmo.jpg',
)
Guardian.create(
  is_primary: true,
  guardian_first_name: 'Frank',
  guardian_last_name: 'Costanza',
  guardian_address_street: Faker::Address.street_address,
  guardian_address_city: Faker::Address.city,
  guardian_address_state: Faker::Address.state_abbr,
  guardian_address_zip: Faker::Address.zip,
  guardian_phone: Faker::PhoneNumber.cell_phone,
  guardian_email: Faker::Internet.safe_email,
  guardian_image:
    'https://static01.nyt.com/images/2020/05/11/arts/11FESTIVUS-promo/11FESTIVUS-promo-mediumSquareAt3X.jpg',
)
Guardian.create(
  is_primary: true,
  guardian_first_name: 'Morty',
  guardian_last_name: 'Seinfeld',
  guardian_address_street: Faker::Address.street_address,
  guardian_address_city: Faker::Address.city,
  guardian_address_state: Faker::Address.state_abbr,
  guardian_address_zip: Faker::Address.zip,
  guardian_phone: Faker::PhoneNumber.cell_phone,
  guardian_email: Faker::Internet.safe_email,
  guardian_image:
    'https://cdn3.whatculture.com/images/2022/01/e65cf8d0761c0470-600x338.jpg',
)

Guardian.create(
  is_primary: true,
  guardian_first_name: 'Mr.',
  guardian_last_name: 'Newman',
  guardian_address_street: Faker::Address.street_address,
  guardian_address_city: Faker::Address.city,
  guardian_address_state: Faker::Address.state_abbr,
  guardian_address_zip: Faker::Address.zip,
  guardian_phone: Faker::PhoneNumber.cell_phone,
  guardian_email: Faker::Internet.safe_email,
  guardian_image:
    'https://assets.mycast.io/actor_images/actor-newman-seinfeld-345194_large.jpg?1642147115',
)

Kid.create(
  kid_first_name: 'Michael ',
  kid_last_name: ' Walsh ',
  kid_nickname: ' Mikey ',
  kid_age: (rand(1..6)),
  kid_gender: 'Male',
  kid_group: 'Goonies',
  kid_allergies: Faker::Science.element,
  kid_notes: Faker::ChuckNorris.fact,
  kid_image:
    'https://i.insider.com/5f5f91bb7ed0ee001e25f1dd?width=750&format=jpeg&auto=webp',
  guardian_id: 1,
)

Kid.create(
  kid_first_name: ' Brandon ',
  kid_last_name: ' Walsh ',
  kid_nickname: ' Brand ',
  kid_age: (rand(1..6)),
  kid_gender: 'Male',
  kid_group: 'Goonies',
  kid_allergies: Faker::Science.element,
  kid_notes: Faker::ChuckNorris.fact,
  kid_image:
    'data:image/jpeg;base64,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',
  guardian_id: 2,
)

Kid.create(
  kid_first_name: ' Clarke  ',
  kid_last_name: ' Devereaux ',
  kid_nickname: ' Mouth ',
  kid_age: (rand(1..6)),
  kid_gender: 'Male',
  kid_group: 'Goonies',
  kid_allergies: Faker::Science.element,
  kid_notes: Faker::ChuckNorris.fact,
  kid_image:
    'https://images.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/33513/1511292728-12202-3078/Mouth_20_Goonies__large.jpg',
  guardian_id: 3,
)

Kid.create(
  kid_first_name: ' Lawrence',
  kid_last_name: ' Cohen ',
  kid_nickname: ' Chunk ',
  kid_age: (rand(1..6)),
  kid_gender: 'Male',
  kid_group: 'Goonies',
  kid_allergies: Faker::Science.element,
  kid_notes: Faker::ChuckNorris.fact,
  kid_image: 'https://metro.co.uk/wp-content/uploads/2016/03/chunk_before.jpg',
  guardian_id: 4,
)

Kid.create(
  kid_first_name: ' Kevin     ',
  kid_last_name: ' McCallister ',
  kid_nickname: ' Kev ',
  kid_age: (rand(1..6)),
  kid_gender: 'Male',
  kid_group: 'Home Alone',
  kid_allergies: Faker::Science.element,
  kid_notes: Faker::ChuckNorris.fact,
  kid_image:
    'https://imageio.forbes.com/blogs-images/robcain/files/2017/10/Kevin-Home-Alone.jpg?format=jpg&width=960',
  guardian_id: 5,
)

Kid.create(
  kid_first_name: ' Mallory ',
  kid_last_name: ' Pike ',
  kid_nickname: ' Mal ',
  kid_age: (rand(1..6)),
  kid_gender: 'Female',
  kid_group: 'Babysitters Club',
  kid_allergies: Faker::Science.element,
  kid_notes: Faker::ChuckNorris.fact,
  kid_image:
    'https://uploads.wornontv.net/2021/10/mallory-white-horse-embroidered-sweater.jpg',
  guardian_id: 6,
)

Kid.create(
  kid_first_name: ' Stacey ',
  kid_last_name: ' Mcgill ',
  kid_nickname: ' Stac',
  kid_age: (rand(1..6)),
  kid_gender: 'Female',
  kid_group: 'Babysitters Club',
  kid_allergies: Faker::Science.element,
  kid_notes: Faker::ChuckNorris.fact,
  kid_image:
    'https://m.media-amazon.com/images/M/MV5BMGY2ZGEwMzEtZjYyZC00YjQ5LWEwODAtNDU2NWFiZDM3OWViXkEyXkFqcGdeQXVyMjAzMjcxNTE@._V1_.jpg',
  guardian_id: 7,
)

puts '✅ Done seeding!'
