# SavaWidgets
- Swintcher widget
- Single Icon widget
- Icons widget
- Table widget
- Counter widget
- Diagram widget
- Rings widget

## SwitchersWidget

Props:
- caption: string
- switchers: string[]

Example: 
```Typescript
<SwitchersWidget 
  caption='Электропитание' 
  switchers={["Центральный вход", "Хозяйственны блок", "Левое крыло", "Правое крыло", "Промывочная"]} 
/>
```

## SingleIconWidget

Props:
- caption: string
- icon: string ("lightning" | "led" | "flame" | "check")
- active: boolean

Example:
```Typescript
<SingleIconWidget
  caption='Промывочная'
  icon='led'
  active=false
/>
```

## IconsWidget

Props:
- icons: {name: string, icon: string, active: boolean}[]

Example:
```Typescript
<IconsWidget
  icons=[
    {name: "Центральный вход", icon: "flame", active: false},
    {name: "Хозяйственны блок", icon: "flame", active: false},
    {name: "Левое крыло", icon: "flame", active: false},
    {name: "Правое крыло", icon: "flame", active: false},
    {name: "Промывочная", icon: "flame", active: false},
  ]
/>
```