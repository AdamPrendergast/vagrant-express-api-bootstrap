Bootstrap for Express API with Mocha Test Suite

Test suite uses Sinon, Mockery and Chai

## Pre-requisites

Vagrant: https://www.vagrantup.com
Virtual Box: https://www.virtualbox.org/

Vagrant Omnibus Plugin

	vagrant plugin install vagrant-omnibus	

Vagrant Berkshelf Plugin

	vagrant plugin install vagrant-berkshelf


## Setup

Clone Repo

	git clone https://github.com/AdamPrendergast/vagrant-express-api-bootstrap.git project_name

Run Vagrant Up

	cd project_name
	vagrant up

## Run App

	vagrant ssh
	node app

http://127.0.0.1:3000/api/

http://127.0.0.1:3000/api/add?number1=2&number2=2

## Run Tests

	vagrant ssh
	mocha

## Useful links

Testing
http://bulkan-evcimen.com/using_mockery_to_mock_modules_nodejs.html