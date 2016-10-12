---
layout: track
order: 1
title:  "AWS Introduction"
date:   2016-07-01 04:00:00 -0400
categories: aws cloud overview introduction
permalink: /training-track/aws-introduction/
---

> Provides an introduction and overview of AWS offerings to level-set all IT staff to opportunities provided by the cloud.
> This track includes resources assuming no knowledge of cloud computing.

**Target Audience:** All IT staff

**Prerequisites:** None

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
: Is a culture, movement or practice that emphasizes the collaboration and communication of both software developers and other information-technology (IT) professionals while automating the process of software delivery and infrastructure changes.


### Overview of AWS services

* [What is Cloud Computing?](https://www.youtube.com/watch?v=jOhbTAU4OPI) (video)
* [A practical guide to AWS] (https://github.com/open-guides/og-aws) (resource site)

##### Compute
* [Introduction to Amazon EC2](https://www.youtube.com/watch?v=TsRBftzZsQo) (video)
* In Depth - [AWS: EC2 & Compute Services](https://www.youtube.com/watch?v=XjcefjUyBvc) (long video)
* [Introduction to Elastic Load Balancing](https://www.youtube.com/watch?v=oEcEqN8PeeI) (video)
* [Introduction to AWS Elastic Beanstalk](https://www.youtube.com/watch?v=dvmssHHBnII&list=PLhr1KZpdzukcMmx04RbtWuQ0yYOp1vQi4&index=9) (video)


##### Storage
* [Introduction to Amazon Elastic Block Store](https://www.youtube.com/watch?v=DKftR47Ljvw) (video)
* [Introduction to Amazon S3](https://www.youtube.com/watch?v=Yyraql9A_Rc) (video)

##### Database
* [Introduction to Amazon RDS](https://www.youtube.com/watch?v=yjH10T3Miag) (video)
* In Depth - [AWS: Database Services](https://www.youtube.com/watch?v=eKyS9rvbj40) (long video)

##### Networking
* [Introduction to Amazon VPC](https://www.youtube.com/watch?v=jcyZmj6Ywh4) (video)
* [Introduction to Route 53](https://www.youtube.com/watch?v=Nm69KMWwH7s) (video)

##### Management Tools
* [CloudWatch FAQs](https://aws.amazon.com/cloudwatch/faqs/#general) (documentation)
* [CloudTrail FAQs](https://aws.amazon.com/cloudtrail/faqs/#general) (documentation)

### Security

##### Overview
* [The Security of the AWS Cloud](https://www.youtube.com/watch?feature=player_embedded&v=OEK7mHn4JLs) (video)
* [Overview of Security Processes](http://d0.awsstatic.com/whitepapers/Security/AWS%20Security%20Whitepaper.pdf) (whitepaper)
* Cornell guidelines for [Regulated Data Use](http://blogs.cornell.edu/cloudification/regulated-data-use-guidelines/) in AWS

##### Shared Responsibility Model
* [Shared Responsibility Model Intro Video](https://www.youtube.com/watch?v=U632-ND7dKQ) (video)
* [Shared Responsibility Model Documentation](https://aws.amazon.com/compliance/shared-responsibility-model/) (article)

### Cornell - Moving to the Cloud

* [Getting Started at Cornell](http://blogs.cornell.edu/cloudification/getting-started/) (blog)
* Success Story - [Class Roster - Moving to AWS with Ansible](https://github.com/CU-CloudCollab/ansible-classroster-presentation/blob/master/doc/SSIT-Ansible-ClassRoster-Apr2016.pdf) (pdf)
