import { Restaurant } from "@prisma/client";
import { BikeIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurreny } from "../_helpers/price";

interface RestaurantItemProps {
    restaurant: Restaurant
}
const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
    return <div className="min-w-[266px] max-w-[266px] space-y-3">
        <div className="w-full h-[136px] relative">
            <Image
                src={restaurant.imageUrl}
                fill className="rounded-lg object-cover"
                alt={restaurant.name}
            />
        </div>
        <div>
            <h3 className="font-semibold text-sm">{restaurant.name}</h3>
            <div className="flex gap-3">
                <div className="flex items-center gap-1">
                    <BikeIcon className="text-primary" size={12} />
                    <span className="text-xs text-muted-foreground">
                        {Number(restaurant.deliveryFee) === 0
                            ? "Entrega grátis"
                            : formatCurreny(Number(restaurant.deliveryFee))}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <TimerIcon className="text-primary" size={12} />
                    <span className="text-xs text-muted-foreground">
                        {restaurant.deliveryTimeMinutes} min
                    </span>
                </div>
            </div>
        </div>
    </div>
};

export default RestaurantItem;