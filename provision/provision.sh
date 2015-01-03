#!/bin/bash

sudo apt-get update

# Set SSH default directory
echo "cd /vagrant/app" >> /home/vagrant/.bashrc