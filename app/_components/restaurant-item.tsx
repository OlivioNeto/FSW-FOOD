import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, Timer, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurreny } from "../_helpers/price";
import { Button } from "./ui/button";

interface RestaurantItemProps {
    restaurant: Restaurant
}
const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
    return (
        <div className="min-w[266px] max-w[266px] space-y-3">
            <div className="relative h-[136px] w-full">
                <Image
                    src={restaurant.imageUrl}
                    fill
                    className="rouded-lg object-cover"
                    alt={restaurant.name}
                />

                <div className="absolute top-2 left-2 gap-[2px] bg-primary py-[2px] px-2 bg-white rounded-full flex items-center">
                    <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">
                        5.0
                    </span>
                </div>

                <Button
                    size="icon"
                    className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-700"
                >
                    <HeartIcon size={16} className="fill-white"/>
                </Button>
            </div>

            <div>
                <h3 className="text-sm font-semibold">{restaurant.name}</h3>
                <div className="flex gap-3">
                    <div className="flex items-center gap-1">
                        <BikeIcon className="text-primary" size={14} />
                        <span className="text-xs text-muted-foreground">
                            {Number(restaurant.deliveryFee) === 0
                                ? "Entrega grátis"
                                : formatCurreny(Number(restaurant.deliveryFee))}
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Timer className="text-primary" size={14} />
                        <span className="text-xs text-muted-foreground">
                            {restaurant.deliveryTimeMinutes} min
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RestaurantItem;