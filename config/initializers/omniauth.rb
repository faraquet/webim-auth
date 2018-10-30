Rails.application.config.middleware.use OmniAuth::Builder do
  provider :vkontakte, '5708690', 'yJasEtQqUOZKJtlpGP4G',
    {
      scope: 'friends',
    }
end