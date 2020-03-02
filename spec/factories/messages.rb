FactoryBot.define do

  factory :message do
    content         {Faker::Lorem.sentence}
    image           {File.open("#{Rails.root}/public/otya.jpg")}
    group        
    user         
  end

end