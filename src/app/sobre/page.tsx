import About from "@/components/About/About";
import DefaultPages from "@/components/DefaultPages/DefaultPages";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <DefaultPages>
      <About
        title="Sobre nós"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, est id feugiat feugiat, justo quam ornare lorem, eu pharetra elit elit vitae lectus. Quisque at semper purus. Maecenas aliquam, ante vitae consequat ultricies, lectus elit euismod eros, eu maximus lorem leo vitae erat. Morbi vitae vulputate ex. Nulla placerat lacus arcu, commodo fringilla mauris euismod et. Suspendisse potenti. Phasellus blandit ac turpis eget consectetur. In ac nulla tincidunt, pharetra nibh et, pulvinar neque. Sed tempus porttitor facilisis. Donec dignissim metus ut purus viverra, in varius mauris congue. Phasellus molestie non velit id blandit.

        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec et iaculis metus, sed mattis nunc. Nulla consequat quis ipsum vitae luctus. Aenean sed leo suscipit, ornare leo ut, pellentesque lectus. Aliquam elementum ullamcorper lectus. Proin pulvinar aliquam odio. Vestibulum sed sagittis mi. Curabitur dapibus, sapien nec maximus congue, risus leo semper lorem, ac consequat urna felis ac dolor.
        
        Quisque scelerisque enim quam, vitae sagittis leo imperdiet eu. Nunc laoreet libero quis nisi mollis consectetur. Curabitur vel lectus dictum, mattis justo et, convallis turpis. Vivamus erat elit, consectetur non enim sed, semper tristique diam. Etiam a arcu nulla. Sed eget lorem dignissim."
      />
    </DefaultPages>
  );
};

export default page;
