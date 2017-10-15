# bran-liang/rails-boilerplate

## About
This is a rails application template to boost your application setup speed.

## Checks
- [x] [Rubocop](https://github.com/bbatsov/rubocop)
- [x] [Brakeman](https://github.com/presidentbeef/brakeman)
- [x] [Pry rails](https://github.com/rweng/pry-rails)
- [x] [Pry byebug](https://github.com/deivid-rodriguez/pry-byebug)
- [ ] [Devise](https://github.com/plataformatec/devise)
- [ ] [Pundit](https://github.com/elabs/pundit)
- [ ] Controller concerns(SkipAuthorization)
- [x] [Pagination kaminari](https://github.com/kaminari/kaminari)
- [ ] Customize Generators Configuration
- [ ] [Active Model Serializer](https://github.com/rails-api/active_model_serializers) or [jsonapi-rb](http://jsonapi-rb.org/)
- [ ] Remove never used gems
- [x] [Figaro](https://github.com/laserlemon/figaro)
- [x] [Overcommit](https://github.com/brigade/overcommit)
- [ ] [Capistrano](https://github.com/capistrano/capistrano)
- [ ] [Sidekiq](http://sidekiq.org/)
- [x] [annotate](https://github.com/ctran/annotate_models)
- [x] [guard](https://github.com/guard/guard)
- [x] [secureheaders](https://github.com/twitter/secureheaders)
- [x] [simplecov](https://github.com/colszowka/simplecov)
- [x] [Template engine Slim](https://github.com/slim-template/slim)
- [x] [Lograge](https://github.com/roidrage/lograge)
- [x] [Timeout](https://github.com/heroku/rack-timeout)
- [x] [Bullet](https://github.com/flyerhzm/bullet)
- [x] [rack-cors](https://github.com/cyu/rack-cors)
- [ ] [Optimized JSON](https://github.com/ohler55/oj)
- [ ] [rack-attack](https://github.com/kickstarter/rack-attack)
- [ ] [Elastic search](https://github.com/elastic/elasticsearch-rails)
- [x] [dry gem sets](http://dry-rb.org)
- [ ] [Redis](https://github.com/redis-store/redis-rails)

## Setup
```ruby
# Step 1
bundle install
# Step 2
overcommit --sign
```

## Guidelines
1. Building Form object using [dry-types](https://github.com/dry-rb/dry-types) and [dry-validation](https://github.com/dry-rb/dry-validation), [resources](http://cucumbersome.net/2016/09/06/rails-form-objects-with-dry-rb.html)
2. API specification ? JSON API?
