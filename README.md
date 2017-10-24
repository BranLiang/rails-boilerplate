# bran-liang/rails-boilerplate

## About
This is a rails application template to boost your application setup speed.

## Todos
- [ ] Controller concerns(SkipAuthorization)
- [ ] Customize Generators Configuration
- [ ] [Active Model Serializer](https://github.com/rails-api/active_model_serializers) or [jsonapi-rb](http://jsonapi-rb.org/)
- [ ] [Capistrano](https://github.com/capistrano/capistrano)

## Features
* Rubocop style and basic safety checks are required for each commit. Related gems: [Overcommit](https://github.com/brigade/overcommit), [Brakeman](https://github.com/presidentbeef/brakeman), [Rubocop](https://github.com/bbatsov/rubocop)
* Figaro is used for necessary configuration. Related gems: [Figaro](https://github.com/laserlemon/figaro)
* Helper middlewares for optimization. Related gems: [rack-cors](https://github.com/cyu/rack-cors), [rack-attack](https://github.com/kickstarter/rack-attack), [secureheaders](https://github.com/twitter/secureheaders), [Timeout](https://github.com/heroku/rack-timeout)
* Slim template engine is choosen for view display as of the consideration of performance. Gem: [Slim](https://github.com/slim-template/slim)
* Develpment helpers used for better experience. Related gems: [Pry rails](https://github.com/rweng/pry-rails), [Pry byebug](https://github.com/deivid-rodriguez/pry-byebug), [annotate](https://github.com/ctran/annotate_models), [guard](https://github.com/guard/guard), [simplecov](https://github.com/colszowka/simplecov), [Lograge](https://github.com/roidrage/lograge), [Bullet](https://github.com/flyerhzm/bullet)
* Redis is choosed for cache solution. Devise is choosed for auth solution. kaminari for pagination. [Redis](https://github.com/redis-store/redis-rails), [Devise](https://github.com/plataformatec/devise), [Pagination kaminari](https://github.com/kaminari/kaminari)
* Pundit is choosen over cancancan as pundit is more object-oriented style. [Pundit](https://github.com/elabs/pundit)
* Backend jobs solution is sidekiq and web ui of sidekiq is securely mounted with password protect. [Sidekiq](http://sidekiq.org/)
* Performance optimization solutions. [Optimized JSON](https://github.com/ohler55/oj)
* Full text search is enabled with elastic search. [Elastic search](https://github.com/elastic/elasticsearch-rails)
* React on rails is used along with customized redux folder structure. Redux-saga is also used for better flow controller. Related gems: [React](https://github.com/shakacode/react_on_rails), [Redux](https://github.com/shakacode/react_on_rails)

## Rails patterns
* [Infinum patterns](https://github.com/infinum/rails-handbook/tree/master/Design%20Patterns)
