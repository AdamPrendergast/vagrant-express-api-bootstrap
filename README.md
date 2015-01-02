Bootstrap for Express API with Mocha Test Suite

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
	cd /vagrant
	node app/app

http://127.0.0.1:3000/

http://127.0.0.1:3000/names.json

## Run Tests

	cd /vagrant
	mocha
