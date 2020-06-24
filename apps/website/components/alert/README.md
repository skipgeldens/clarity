---
title: Overview
---

Alerts are banners that communicate a message with a severity attached to it.

## Usage

Use alerts to grab the user’s attention to provide critical information needed in context.
Standard alerts convey different levels of severity and urgency.
App-level alerts follow the same urgency order as standard alerts: error, warning, and info.

## Types

There are two types of alerts, standard alerts and app level alerts.

## Standard alerts

Standard alerts are used in the context of an application either in the content area itself or within components.

### Sub-types

There are four different sub-types of standard alerts: error, warning, info, and success.

<!-- [//]: # (Illustrations x3 - info/warning/error) -->

<!-- [//] ### Anatomy-A standard alert consist of an icon, a message, and optional actions in a container. -Left align the icon and message. Right aligned the actions.   -->

### Size

There are two sizes of standard alerts: default and compact. Use the compact alert only in places where vertical space is scarce and information density is needed. Cards provide a good example here.

### Placement

Standard alerts are used in the context of an application either in the content area itself or within components.

#### Order in context

Standard alerts convey different levels of severity and urgency. They’re ordered by the urgency in which the user needs to pay attention to: error, warning, info, then success.

In the case there are multiple of each sub-type, all of them are shown before another sub-type is reached. For example, multiple errors are shown before the first warning is.

#### In Modals

Alerts could appear within modals. It is recommended that no more than one alert appear within a modal. Their function should not be to validate, validation should be done inline and closer to the error itself.

<!-- [//]: # (Image - alert in modal) -->

#### In Cards

It is recommended to use concise language as you share an alert within a card. It is also recommended to use a compact-size alert. The focus of the alert should be on its content not on the alert appearing in it.
It is also recommended to have an alert at the very top of a card, on top of its title. An alert is meant to attract the attention of the user.
Using more than one alert within a card distracts the user and dilutes the importance of the alerts displayed.
There are three sub-types of app-level alerts: error, warning, and info.

<!-- [//]: # (Image - alert in card) -->

## App-Level Alerts

App-level alerts are used in the global context of an application. They are placed at the very top of all content and navigation.

There are three different sub-types of app-level alerts info, warning, and error.

<!-- [//]: # (Illustrations x3 - info/warning/error) -->

<!-- [//] IMAGE - purple pin on gray - Why no success app-level alert? - App-level alerts are global in nature. Reporting a success of an operation should either be communicated within context or as a notification message. -->

**Why no success app-level alert?**

App-level alerts are global in nature. Reporting a success of an operation should either be communicated within context or as a notification message.

<!-- [//] ### Anatomy- An app-level alert consist of an icon, a message, and optional actions in a container. - All elements are centered-aligned.  -Add anatomy for inline alerts - Need to add pagination   -->

## Placement

App-level alerts are placed at the very top of the global context. They should not be placed in any other configuration. Their purpose is to provide global alerts available and relating to the full context of the overall application.

#### Order in context

App-level alerts follow the same urgency order as standard alerts: error, warning, and info.

## Content

Depending on the sub-type of a standard alert, make sure to communicate a clear, concise, and actionable message.

<!-- [//]: Lightweight alerts are coming soon and will need to be added to this documentation. -->
