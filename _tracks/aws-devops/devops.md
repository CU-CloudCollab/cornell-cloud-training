---
layout: track
order: 4
title:  "AWS DevOps"
date:   2016-07-01 04:00:00 -0400
categories: aws devops
permalink: /training-track/aws-devops/
---
<!-- * TOC
{:toc} -->

> DevOps techniques and approaches in the AWS Cloud.

**Target Audience:** Targeted at DevOps engineers; developers; system administrators.

**Prerequisites:** Basic scripting skills and linux command line experience.

### Key Terms

{:dl .dl-horizontal}
Infrastructure as code
: The process of managing and provisioning computing infrastructure (processes, bare-metal servers, virtual servers, etc.) and their configuration through machine-processable definition files, rather than physical hardware configuration or the use of interactive configuration tools.

Pets vs. Cattle
: ([Blog](https://blog.engineyard.com/2014/pets-vs-cattle)) The difference between the pre-virtualisation model and the post-virtualisation model can be thought of as the difference between pets and cattle. Pets are given loving names, like pussinboots (or in my case, Tortoise, Achilles, etc.). They are unique, lovingly hand-raised, and cared for. You scale them up by making them bigger. And when they get sick, you nurse them back to health. Whereas cattle are given functional identification numbers like vm0042. They are almost identical to each other. You scale them out by getting more of them. And when one gets sick, you replace it with another one.

Lift & Shift
: Replicating in-house apps in the cloud without re-design

Containers
: Are an operating-system-level virtualization method for running multiple isolated Linux systems (containers) on a control host using a single Linux kernel

DevOps
: Is a cultural movement or practice that emphasizes the collaboration and communication of both software developers and other information-technology (IT) professionals while automating the process of software delivery and infrastructure changes.

### Infrastructure as Code

##### Continuous Delivery
* [In Praise of the ./go Script - Part I](https://www.thoughtworks.com/insights/blog/praise-go-script-part-i) (blog)
* [The 5 Rules of an Awesome Dev Toolchain](http://blog.thepete.net/blog/2014/03/28/_-attributes-of-an-amazing-dev-toolchain/) (blog)
* [AWS What is Continuous Delivery?](https://aws.amazon.com/devops/continuous-delivery/) (article)

##### Continuous Integration
* [Continuous Integration Best Practices: Vision and Reality](http://electric-cloud.com/plugins/continuous-integration/) (blog)
* Jenkins
  * [Linux Academy Jenkins Build Automation](https://linuxacademy.com/cp/modules/view/id/42) (video - login required)
  * [Jenkins Wiki](https://wiki.jenkins-ci.org/display/JENKINS/Use+Jenkins) (wiki)

##### Configuration Management
* Chef
  * [Linux Academy Course](https://linuxacademy.com/cp/learningplans/view/id/16355) (course - login required)
  * [Online Training](https://learn.chef.io/) (various)
* Puppet
  * [Linux Academy Course](https://linuxacademy.com/cp/modules/view/id/34) (course - login required)
  * [Online Training](https://learn.puppet.com/) (various)

##### Docker
* [Docker in 5 mins](https://www.youtube.com/watch?v=Av2Umb6nELU) (video)
* [Docker Self Paced Training](http://training.docker.com/self-paced-training) (video)
* [LinuxAcademy Docker Deep Dive](https://linuxacademy.com/cp/modules/view/id/33) (course - login required)

### AWS - In Depth

In more depth (200/300) including CLI

##### CI/CD
* [Blue/Green deployment](https://www.youtube.com/watch?v=aX54mhZbN58) (video)
* [Tools Overview](https://www.youtube.com/watch?v=esEFaY0FDKc) (video)
* [Introduction to OpsWorks](https://www.youtube.com/watch?v=TPc4zdFg12M) (video)
* [Docker and ECS in Production](https://www.youtube.com/watch?v=8zbbQkszP04&index=8&list=PLhr1KZpdzukeH9VMPbNHMCXl_NrVc1JGe) (video)

##### AWS API Examples
* [https://github.com/CU-CloudCollab/aws-examples](https://github.com/CU-CloudCollab/aws-examples) (code repository)
* [https://github.com/CU-CloudCollab/elb-logging](https://github.com/CU-CloudCollab/elb-logging) (code repository)
* [https://github.com/CU-CloudCollab/ebs-restore](https://github.com/CU-CloudCollab/ebs-restore) (code repository)
* [https://github.com/CU-CloudCollab/lambda-cnamer](https://github.com/CU-CloudCollab/lambda-cnamer) (code repository)
* [https://github.com/CU-CloudCollab/asg-ami-update](https://github.com/CU-CloudCollab/asg-ami-update) (code repository)
* [https://github.com/CU-CloudCollab/ebs-expand-root-vol](https://github.com/CU-CloudCollab/ebs-expand-root-vol) (code repository)

##### Security

* [Intrusion Detection in the Cloud](https://www.youtube.com/watch?v=WUQNeMhkaco) (video)
* [Enterprise Cloud Security via DevSecOps 2.0](https://www.youtube.com/watch?v=fqjwlKKA-V4) (video)
* [Learn How to Hackproof Your Cloud Using Native AWS Tools](https://www.youtube.com/watch?v=1ERy_YomoYk) (video)
* [AWS Security Best Practices](http://media.amazonwebservices.com/AWS_Security_Best_Practices.pdf) (white paper)
