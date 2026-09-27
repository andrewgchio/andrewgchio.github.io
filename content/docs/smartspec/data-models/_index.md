---
# Page title
title: Data Models

# Page summary for search engines.
summary: Descriptions of the data models used in SmartSPEC. 

# Date page published
date: 2023-01-01

# Book page type (do not modify).
type: book

# Position of this page in the menu. Remove this option to sort alphabetically.
weight: 20

---

## Overview

SmartSPEC uses a smart space semantic model to represent a smart space scenario. Below, we describe the four basic data models for [Spaces](#spaces-file), [People](#people-file), [Events](#events-file) and [Sensors](#sensors-file). Additionally, we characterize more complex relationships between these smart space entities, by defining [MetaPeople](#metapeople-file) and [MetaEvents](#metaevents-file). Finally, we describe the notation of time using [Time Profiles](#time-profile). 

## Spaces File
`Spaces.json` describes a logical space in SmartSPEC. It is encoded by the following JSON formatted file: 

```
[
    {
        "id" : int,
        "description" : str (default=""),
        "coordinates" : [int, int, int],
        "capacity" : int (default=-1),
        "neighbors" : [int]
    }, 
    ...
]
```

The `id` property should uniquely identify a space. 

The `description` property is optional and provides a user-friendly name for the space. 

The `coordinates` property denotes x,y,z coordinates. The coordinate system is arbitrarily defined by the user. 

The `capacity` property denotes the maximum number of people that can be in the space at the same time. `-1` is a special value denoting that a space has infinite capacity. 

Example: 
```
[
    {
        "id" : 1,
        "description" : "first floor lobby",
        "coordinates" : [30, 50, 10],
        "capacity" : 30,
        "neighbors" : [2, 3]
    },
    ...
]
```

> [!NOTE]
> You must also define an extra space entry with `id=0` denoting the outside space (conceptually representing when a person is outside of the simulated space). 

## People File
`People.json` describes a person in SmartSPEC. It is encoded by the following JSON formatted file: 

```
[
    {
        "id" : int,
        "metaperson-id" : int,
        "description" : str (default=""),
        "profile-index" : int
    },
    ...
]
``` 

The `id` property should uniquely identify a person.

The `metaperson-id` property determines the metaperson group to which the person belongs. 

The `description` property is optional and provides a user-friendly name for the person. 

The `profile-index` property denotes the time profile index to use in the associated metaperson entry. 

Example: 
```
[
    {
        "id" : 14,
        "metaperson-id" : 2,
        "description" : "Alice",
        "profile-index" : 0
    },
    ...
]
```

## Events File
`Events.json` describes a semantic event in SmartSPEC. It is encoded by the following JSON formatted file: 

```
[
    {
        "id" : int,
        "metaevent-id" : int,
        "description" : str (default=""),
        "profile-index" : int,
        "space-ids" : [int],
        "capacity" : [
            {
                "metaperson-id" : int, 
                "range" : [int, int]
            }, 
            ...
        ]
    },
    ...
]
```

The `id` property should uniquely identify an event.

The `metaevent-id` property determines the metaevent group to which the event belongs. 

The `description` property is optional and provides a user-friendly name for the event. 

The `profile-index` property denotes the time profile index to use in the associated metaevent entry. 

The `space-ids` property denotes the spaces in which the event can take place. 

The `capacity` property denotes the number of people of each type of metaperson. The `range` property specifies bounds (`[lo, high]`) on the number of people in attendance. 

Example:
```
[
    {
        "id" : 20,
        "metaevent-id" : 12,
        "description" : "Computer Lab #5",
        "profile-index" : 1,
        "space-ids" : [183, 189, 192],
        "capacity" : [
            {
                "metaperson-id" : 1,
                "range" : [2, 8]
            },
            {
                "metaperson-id" : 2,
                "range" : [0, 1]
            },
            ...
        ]
    },
    ...
]
```

> [!NOTE]
> A special event with `id=0` denoting the "leisure" event should be defined. The leisure event serves as a default event that a person will attend if they are unable to attend any other event. 

> [!NOTE]
> Additionally, a special event with `id=-1` denoting an "out-of-simulation" event will be also defined automatically; it serves as a placeholder event to indicate that a person is arriving / leaving the simulated space at the start/end of the day, respectively. 

## Sensors File
`Sensors.json` describes both in-situ and mobile sensors in SmartSPEC. It is encoded by the following JSON formatted file: 

```
[
    {
        "id" : int,
        "description" : str (default="")
        "mobility" : str (either "static" or "mobile"),
        "coverage" : [int] or int,
        "interval" : int
    },
    ...
]
```

The `id` property should uniquely identify a sensor.

The `description` property is optional and provides a user-friendly name for the sensor. 

The `mobility` property is a string taking on one of the values `"static"` or `"mobile"`. An in-situ sensor is modeled with `mobility="static"` and a list of covered spaces `coverage=[int]`.

The `interval` property determines the periodic interval in minutes for which the sensor produces observations. 

Example:
```
[
    {
        "id" : 3,
        "description" : "hallway"
        "mobility" : "static",
        "coverage" : [40, 41, 43],
        "interval" : 60
    },
    ...
]
```

## MetaPeople File
`MetaPeople.json` describes a characterization of a group of similar people. It is encoded by the following JSON formatted file: 

```
[
    {
        "id" : int,
        "description" : str (default=""),
        "probability" : int or double,
        "time-profiles" : [
            {
                "probability" : int or double,
                "profile" : TimeProfile
            }, 
            ...
        ],
        "event-affinity" : [
            {
                "metaevent-id" : int,
                "probability" : int or double
            },
            ...
        ]
    },
    ...
]
```

The `id` property should uniquely identify a metaperson.

The `description` property is optional and provides a user-friendly name for the metaperson. 

The `probability` property denotes the proportion of the population that the metaperson represents. It is used to generate additional people. This number is normalized if the sum of probabilities across metapeople is greater than 1. 

The `time-profiles` property denotes a list of time profiles `profile`, each with a given probability `probability` of selection. See [below](#time-profile) for a description of a time profile. The probabilty is normalized if the sum across time profiles is greater than 1. The time profiles denote the days and times for which a person enters/exits the simulated space. 

The `event-affinity` property denotes the probabilities with which people in this group of metapeople will attend events. The probabilities specified here should be relative to each other. 

Example:
```
[
    {
        "id" : 22,
        "description" : "student",
        "probability" : 15,
        "time-profiles" : [
            {
                "probability" : 1,
                "profile" : [
                    {
                        "pattern": {
                            "start-date" : "2018-01-11",
                            "end-date" : "2018-02-05",
                            "period" : "week",
                            "period-details" : {
                                "days-of-week" : [4]
                            }
                        },
                        "duration" : {
                            "start-time" : ["09:35:00", "00:10:00"],
                            "end-time" : ["12:20:00", "00:10:00"],
                            "required" : ["02:00:00", "00:15:00"]
                        }
                    }
                ]
            }, 
            ...
        ],
        "event-affinity" : [
            {
                "metaevent-id" : 5,
                "probability" : 10
            },
            {
                "metaevent-id" : 7,
                "probability" : 20
            },
            ...
        ]
    },
    ...
]
```

## MetaEvents File
`MetaEvents.json` describes a characterization of a group of similar events. It is encoded by the following JSON formatted file: 

```
[
    {
        "id" : int,
        "description" : str (default=""),
        "probability" : int or double,
        "spaces" : {
            "space-ids" : [int],
            "number" : int
        },
        "time-profiles" : [
            {
                "probability" : int or double,
                "profile" : TimeProfile
            }, 
            ...
        ],
        "capacity" : [
            {
                "metaperson-id" : int,
                "lo" : [int, int],
                "hi" : [int, int]
            },
            ...
        ]
    },
    ...
]
```

The `id` property should uniquely identify a metaevent.

The `description` property is optional and provides a user-friendly name for the metaevent. 

The `probability` property denotes the number of events in the metaevent group. It is used to generate additional events. The number is normalized to become a proportion. 

The `spaces` property denotes the potential spaces for which events in this metaevent group take place. In the generation process, `number` spaces are selected at random from the `space-ids` list. 

The `time-profiles` property denotes a list of time profiles `profile`, each with a given probability `probability` of selection. See [below](#time-profile) for a description of a time profile. The probabilty is normalized if the sum across time profiles is greater than 1. The time profiles denote the days and times for which an event occurs. 

The `capacity` property denotes the attendance ranges for different types of metapeople. The `lo` and `hi` properties denote mean and standard deviation parameters for a Normal distribution. 

Example:
```
[
    {
        "id" : 8,
        "description" : "Operating Systems Lecture"
        "probability" : 10,
        "spaces" : {
            "space-ids" : [1000],
            "number" : 1
        },
        "time-profiles" : [
            {
                "probability" : 1.0,
                "profile" : [
                    {
                        "pattern": {
                            "start-date" : "2018-01-08",
                            "end-date" : "2018-03-06",
                            "period" : "week",
                            "period-details" : {
                                "days-of-week" : [1,3,5]
                            }
                        },
                        "duration" : {
                            "start-time" : ["09:00:00", "00:02:00"],
                            "end-time" : ["09:50:00", "00:02:00"],
                            "required" : ["00:45:00", "00:05:00"]
                        }
                    }
                ]
            },
            ...
        ],
        "capacity" : [
            {
                "metaperson-id" : 7,
                "lo" : [30, 5],
                "hi" : [200, 30]
            },
            ...
        ]
    },
    ...
]
```

## Time Profile
The concept of a time profile is used to describe temporal patterns in SmartSPEC. In particular, a time profile is used to denote a duration of time for which either: (i) an event occurs; or (ii) a person first enters/last exits the simulated space in a day. We refer to these durations as "active". It is encoded as follows: 

```
[
    {
        "pattern" : {
            "start-date" : DateStr,
            "end-date" : DateStr,
            "period" : See below,
            "period-details" : See below
        },
        "duration" : {
            "start-time" : [TimeStr, TimeStr],
            "end-time" : [TimeStr, TimeStr],
            "required" : [TimeStr, TimeStr]
        }
    },
    ...
]
```

The `start-date` and `end-date` properties are strings in the form of `'YYYY-MM-DD'` and denote the start/end dates of the time profile pattern. The `period` and `period-details` properties are explained below. 

The `start-time` and `end-time` properties are strings in the form `'HH:MM:SS'` and denote the start/end times for a given active day. The 2-list represents a mean time and standard deviation time as parameters to a Normal distribution.

The `required` property denotes the minimum duration of an active period -- for people, this denotes the minimum amount of time that they must be able to attend an event before committing, and for events, this denotes the minimum amount of time that the event spans. The `required` property is defined by a mean time and standard deviation time, also as parameters to a Normal distribution. 

There are several different values for the attributes `period` and `period-details` as follows:

1. Daily Period: Denotes an active day that "repeats every \<repeat-every\> days" (e.g., repeats every 3 days)
```
{
    ...
    "period" : "day",
    "period-details" : {
        "repeat-every" : int (default=1)
    }
    ...
}
```

2. Weekly Period: Denotes an active day that "repeats on \<days-of-week\> of every \<repeat-every\> week" (e.g., repeats every MWF of every 2 weeks). Note, that the \<days-of-week\> are integers corresponding to the ISO Week (Mon=1, Sun=7). 
```
{
    ...
    "period" : "week",
    "period-detail" : {
        "repeat-every" : int (default=1),
        "days-of-week" : [int]
    }
    ...
}
```

3. Monthly Period, Pattern A: Denotes an active day that "repeats on \<days-of-month\> of every \<repeat-every\> month" (e.g., repeats every 3rd, 5th, and 10th day of every 2 months). 
```
{
    ...
    "period" : "month",
    "period-detail" : {
        "repeat-every" : int (default=1),
        "days-of-month" : [int]
    }
    ...
}
```

4. Monthly Period, Pattern B: Denotes an active day that "repeats on \<days-of-week\>, in \<week-of-month\>, every \<repeat-every\> month" (e.g., repeats on MWF in week 1 of every month). Note, that the \<days-of-week\> are integers corresponding to the ISO week (Mon=1, Sun=7).
```
{
    ...
    "period" : "month",
    "period-detail" : {
        "repeat-every" : int (default=1),
        "weeks-of-month" : [int]
        "days-of-week" : [int]
    }
    ...
}
```

5. Yearly Period, Pattern A: Denotes an active day that "repeats on \<days-of-year\>, every \<repeat-every\> year" (e.g., repeat every 1st day of each year)
```
{
    ...
    "period" : "year",
    "period-detail" : {
        "repeat-every" : int (default=1),
        "days-of-year" : [int]
    }
    ...
}
```

6. Yearly Period, Pattern B: Denotes an active day that "repeats on \<days-of-week\> in \<weeks-of-year\>, every \<repeat-every\> year" (e.g., repeat every MWF in 5th and 10th weeks of every 2nd year)
```
{
    ...
    "period" : "year",
    "period-detail" : {
        "repeat-every" : int (default=1),
        "weeks-of-year" : [int],
        "days-of-week" : [int]
    }
    ...
}
```

7. Yearly Period, Pattern C: Denotes an active day that "repeats on \<days-of-month\> of every \<month-of-year\>, every \<repeat-every\> year" (e.g., repeat on 1st day of every 4nd month of every year)
```
{
    ...
    "period" : "year",
    "period-detail" : {
        "repeat-every" : int (default=1),
        "months-of-year" : [int],
        "days-of-month" : [int]
    }
    ...
}
```

8. Yearly Period, Pattern D: Denotes an active day that "repeats on \<days-of-week\> in each \<weeks-of-month\> of \<months-of-year\>, every \<repeat-every\> year" (e.g., repeat MWF in each 2nd week of the 5th month, every 4th year)
```
{
    ...
    "period" : "year",
    "period-detail" : {
        "repeat-every" : int (default=1),
        "months-of-year" : [int],
        "weeks-of-month" : [int],
        "days-of-week" : [int]
    }
    ...
}
```
